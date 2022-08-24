import { MouseEvent, useCallback, useEffect, useState } from "react";
import ReactFlow, { Controls, Edge, Node } from "react-flow-renderer";
import ConditionNode, {
  ConditionNodeTypes,
} from "components/ConditionsLayer/Nodes/ConditionNode";
import DashedEdge from "components/Edges/DashedEdge";
import {
  EdgeTypes,
  initialEdges,
  initialNodes,
  NodeTypes,
} from "./initialElements";
import StartEndNode from "../Nodes/StartEndNode";
import { StartEndNodeTypes } from "../Nodes/StartEndNode/StartEndNode";
import styles from "./Flow.module.scss";
import SetConditionModal from "../SetConditionModal";

const nodeTypes = { condition: ConditionNode, startEnd: StartEndNode };
const edgeTypes = {
  dashed: DashedEdge,
};

interface FlowProps {
  arePlaceholdersVisible: boolean;
}

enum ItemTypes {
  COLUMN = "col",
  ROW = "row",
}

const findLastItem = (nodes: Node[], type: ItemTypes) =>
  Math.max(
    ...nodes.map(({ data }) => {
      return data[type] || 0;
    })
  );

interface ColumnData {
  col: number;
  row: number;
  id: string | null;
}

const lastElementInEachRow = (nodes: Node[]) => {
  let colArr: ColumnData[] = [];
  const preparedNodes = nodes.filter(
    (item) => item.data.type !== ConditionNodeTypes.PLACEHOLDER
  );

  preparedNodes.map(({ data }) => {
    if (!colArr.find((item) => item.row === data.row))
      colArr.push({ col: 0, row: data.row, id: null });
  });

  colArr = colArr.map(({ row }) => {
    let colMax = 0;
    let tempId = "";
    for (const { id, data } of preparedNodes) {
      if (row === data.row && data.col >= colMax) {
        colMax = data.col;
        tempId = id;
      }
    }
    return {
      row,
      col: colMax,
      id: tempId,
    };
  });

  return colArr;
};

const Flow = ({ arePlaceholdersVisible }: FlowProps) => {
  const [activeNodeModal, setActiveNodeModal] = useState<null | Node>(null);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [filteredNodes, setFilteredNodes] = useState<Node[]>(initialNodes);
  const [filteredEdges, setFilteredEdgesd] = useState<Edge[]>(initialEdges);
  const [formattedNodes, setFormattedNodes] = useState<Node[]>(initialNodes);
  const [formattedEdges, setFormattedEdges] = useState<Edge[]>(initialEdges);
  const [currentSetConditionValue, setCurrentSetConditionValue] = useState("");

  useEffect(() => {
    if (arePlaceholdersVisible) {
      setFormattedNodes(nodes);
      setFormattedEdges(edges);
    } else {
      const emptyRows: number[] = [];
      const rows: number[] = [];
      let maxRow = 0;

      const endNodeIndex = (
        parseInt(filteredNodes[filteredNodes.length - 1].id) + 1
      ).toString();

      const lastColumn = findLastItem(filteredNodes, ItemTypes.COLUMN);
      const lastRow = findLastItem(filteredNodes, ItemTypes.ROW);

      filteredNodes.forEach(({ data }) => {
        if (rows.indexOf(data.row) < 0) rows.push(data.row);
        if (data.row > maxRow) maxRow = data.row;
      });

      for (let i = 0; i <= maxRow; i++) {
        if (rows.indexOf(i) < 0) emptyRows.push(i);
      }

      setFormattedNodes([
        ...filteredNodes.map((item) => {
          item = { ...item };
          if (item.type === NodeTypes.CONDITION) {
            let rowsToPass = 0;
            emptyRows.forEach((row) => {
              if (row < item.data.row) rowsToPass++;
            });

            item.position = {
              ...item.position,
              y: item.position.y - rowsToPass * 50,
            };
            item.data = {
              ...item.data,
              row: item.data.row - rowsToPass,
            };
          }
          return item;
        }),
        {
          id: endNodeIndex,
          type: NodeTypes.START_END,
          data: {
            type: StartEndNodeTypes.END,
            col: lastColumn + 1,
            row: 0,
          },
          position: {
            x: 310 + lastColumn * 200 + 10 * lastRow,
            y: 10 + 25 * lastRow,
          },
        },
      ]);
      setFormattedEdges([
        ...filteredEdges,
        ...lastElementInEachRow(nodes).map(({ id }) => ({
          id: `e${id}-${endNodeIndex}`,
          source: id || "",
          target: endNodeIndex,
          type: EdgeTypes.DEFAULT,
        })),
      ]);
    }
  }, [filteredNodes, filteredEdges]);

  useEffect(() => {
    if (arePlaceholdersVisible) {
      setFilteredNodes(nodes);
      setFilteredEdgesd(edges);
    } else {
      setFilteredNodes(
        nodes.filter(
          (item) => item.data.type !== ConditionNodeTypes.PLACEHOLDER
        )
      );
      setFilteredEdgesd(edges.filter((item) => item.type !== EdgeTypes.DASHED));
    }
  }, [arePlaceholdersVisible, nodes, edges]);

  const onNodeClick = (e: MouseEvent, node: Node) => setActiveNodeModal(node);
  const onNodeModalClose = () => setActiveNodeModal(null);

  const onNodeSubmit = useCallback(
    (node: Node, words: string[]) => {
      if (node.data.type !== ConditionNodeTypes.PLACEHOLDER) return;
      const placeholderIds: any = {
        down: null,
        forward: null,
        edgeDownStart: null,
      };

      placeholderIds.edgeDownStart = edges.find(
        (item) => item.target === node.id
      )?.source;

      setNodes((nds) => {
        placeholderIds.down = parseInt(nds[nds.length - 1].id) + 2;
        placeholderIds.forward = parseInt(nds[nds.length - 1].id) + 1;
        return [
          ...nds.map((item) => {
            if (item.type === NodeTypes.START_END) {
              item.position = {
                x: -10 * findLastItem(nodes, ItemTypes.ROW),
                y: 10 + 25 * findLastItem(nodes, ItemTypes.ROW),
              };
            }
            if (item.id === node.id) {
              item.data = {
                ...item.data,
                type: ConditionNodeTypes.DEFAULT,
                value: words.join(" "),
              };
            }
            if (item.data.row > node.data.row) {
              item.data = {
                ...item.data,
                row: item.data.row + 1,
              };
              item.position = {
                ...item.position,
                y: item.position.y + 50,
              };
            }
            return item;
          }),
          {
            id: placeholderIds.forward.toString(),
            type: NodeTypes.CONDITION,
            data: {
              type: ConditionNodeTypes.PLACEHOLDER,
              col: node.data.col + 1,
              row: node.data.row,
            },
            position: { x: node.position.x + 200, y: node.position.y },
          },
          {
            id: placeholderIds.down.toString(),
            type: NodeTypes.CONDITION,
            data: {
              type: ConditionNodeTypes.PLACEHOLDER,
              col: node.data.col,
              row: node.data.row + 1,
            },
            position: { x: node.position.x, y: node.position.y + 50 },
          },
        ];
      });

      setEdges((eds) => [
        ...eds.map((item) => {
          if (item.target === node.id) {
            item.type = EdgeTypes.DEFAULT;
          }
          return item;
        }),
        {
          id: `e${node.id}-${placeholderIds.forward}`,
          source: node.id.toString(),
          target: placeholderIds.forward.toString(),
          type: EdgeTypes.DASHED,
        },
        {
          id: `e${placeholderIds.edgeDownStart}-${placeholderIds.down}`,
          source: placeholderIds.edgeDownStart,
          target: placeholderIds.down.toString(),
          type: EdgeTypes.DASHED,
        },
      ]);

      setCurrentSetConditionValue("");
    },
    [nodes, edges]
  );

  return (
    <ReactFlow
      style={{ background: "#20222D", padding: 0 }}
      nodes={formattedNodes}
      edges={formattedEdges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodeClick={onNodeClick}
      fitView
    >
      <Controls showInteractive={false} className={styles.controls} />
      {activeNodeModal && (
        <SetConditionModal
          node={activeNodeModal}
          submitFn={onNodeSubmit}
          closeFn={onNodeModalClose}
          setCurrentSetConditionValue={setCurrentSetConditionValue}
        />
      )}
    </ReactFlow>
  );
};

export default Flow;

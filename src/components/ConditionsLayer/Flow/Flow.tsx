import { MouseEvent, useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
} from "react-flow-renderer";
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

const nodeTypes = { condition: ConditionNode, startEnd: StartEndNode };
const edgeTypes = {
  dashed: DashedEdge,
};

interface FlowProps {
  arePlaceholdersVisible: boolean;
}

const findLastColumn = (nodes: Node[]) => {
  let lastCol = 0;
  nodes.map(({ data }) => (data.col > lastCol ? (lastCol = data.col) : null));
  return lastCol;
};

interface ColumnData {
  col: number;
  row: number;
  id: string | null;
}

const findLastRow = (nodes: Node[]) => {
  let maxRow = 0;
  nodes.map(({ data }) => (data.row > maxRow ? (maxRow = data.row) : null));
  return maxRow;
};

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
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [filtratedNodes, setFiltretedNodes] = useState<Node[]>(initialNodes);
  const [filtratedEdges, setFiltretedEdges] = useState<Edge[]>(initialEdges);

  useEffect(() => {
    if (arePlaceholdersVisible) {
      setFiltretedNodes(nodes);
      setFiltretedEdges(edges);
    } else {
      const endNodeIndex = (
        parseInt(nodes[nodes.length - 1].id) + 1
      ).toString();

      const lastColumn = findLastColumn(nodes);
      const lastRow = findLastRow(nodes);

      setFiltretedNodes([
        ...nodes.filter(
          (item) => item.data.type !== ConditionNodeTypes.PLACEHOLDER
        ),
        {
          id: endNodeIndex,
          type: NodeTypes.START_END,
          data: {
            type: StartEndNodeTypes.END,
            col: findLastColumn(nodes) + 1,
            row: 0,
          },
          position: {
            x: 110 + lastColumn * 200 + 10 * lastRow,
            y: 10 + 25 * lastRow,
          },
        },
      ]);
      setFiltretedEdges([
        ...edges.filter((item) => item.type !== EdgeTypes.DASHED),
        ...lastElementInEachRow(nodes).map(({ id }) => ({
          id: ["e", id, "-", endNodeIndex].join(""),
          source: id || "",
          target: endNodeIndex,
          type: EdgeTypes.DEFAULT,
        })),
      ]);
    }
  }, [arePlaceholdersVisible, nodes, edges]);

  const onNodeClick = useCallback(
    (e: MouseEvent, node: Node) => {
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
                x: -10 * findLastRow(nodes),
                y: 10 + 25 * findLastRow(nodes),
              };
            }
            if (item.id === node.id) {
              item.data = {
                ...item.data,
                type: ConditionNodeTypes.DEFAULT,
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
          id: ["e", node.id, "-", placeholderIds.forward].join(""),
          source: node.id.toString(),
          target: placeholderIds.forward.toString(),
          type: EdgeTypes.DASHED,
        },
        {
          id: [
            "e",
            placeholderIds.edgeDownStart,
            "-",
            placeholderIds.down,
          ].join(""),
          source: placeholderIds.edgeDownStart,
          target: placeholderIds.down.toString(),
          type: EdgeTypes.DASHED,
        },
      ]);
    },
    [nodes, edges]
  );

  return (
    <ReactFlow
      nodes={filtratedNodes}
      edges={filtratedEdges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodeClick={onNodeClick}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;

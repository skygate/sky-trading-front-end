export const dummy = {
  _id: "045uhse56df83fkdfd9", // nazwa usera + czas + hash
  name: "Moja strategia",
  description: "opis mojej strategi",
  date: 2146462342114, //tu bedzie timestamp, to tworzy backend??
  candle: [
    {
      id: "japan5",
      type: "japan",
      timeFrame: {
        value: 5,
        unit: "hour",
      },
    },
  ],
  open: {
    risk: {
      value: 5,
      unit: "USD",
    },
    indicators: [
      {
        id: "stochastic1542",
        name: "stoch", // nazwa fn z ta-lib
        candle: "japan5", // swieca na ktorej jest liczony ten indicator
        valuesIn: [
          {
            name: "param1",
            value: 10,
          },
          {
            name: "param2",
            value: 3,
          },
          {
            name: "param3",
            value: 3,
          },
        ],
        valuesOut: ["stoch-k", "stoch-d"],
      },
    ],
    conditions: [
      {
        condition: "$stochastic1542%k cross from below $stochastic1542%d",
        and: [
          {
            condition: "string z warunkiem",
            and: [
              {
                condition: "string z warunkiem",
                and: [
                  {
                    condition: "string z warunkiem",
                    and: [],
                  },
                ],
              },
              {
                condition: "string z warunkiem",
                and: [
                  {
                    condition: "string z warunkiem",
                    and: [],
                  },
                ],
              },
              {
                condition: "string z warunkiem",
                and: [
                  {
                    condition: "string z warunkiem",
                    and: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        condition: "string z warunkiem",
        and: [
          {
            condition: "string z warunkiem",
            and: [],
          },
        ],
      },
    ],
  },
  close: {
    risk: {
      value: 5,
      unit: "USD",
    },
    conditions: [
      {
        condition: "string z warunkiem",
        and: [
          {
            condition: "string z warunkiem",
            and: [],
          },
        ],
      },
      {
        condition: "string z warunkiem",
        and: [
          {
            condition: "string z warunkiem",
            and: [],
          },
        ],
      },
    ],
  },
};

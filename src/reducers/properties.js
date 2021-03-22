const initialState = {
  data: [
    {
      number: "1",
      title: "Find The Property Of Your Choice",
      details: `Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec.
                    Porta nibh`,
    },
    {
      number: "2",
      title: "Find The Property Of Your Choice",
      details: `Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec.
                    Porta nibh`,
    },
    {
      number: "3",
      title: "Find The Property Of Your Choice",
      details: `Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec.
                    Porta nibh`,
    },
  ],
};

export default function properties(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

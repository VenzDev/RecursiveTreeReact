let data = {
  id: "Nagłówek drzewa",
  additional: "wielowierszowy",
  children: [
    {
      id: "Pododdział 1",
      type: "radio",
      children: [
        {
          id: "Zespół 1",
          additional: "HR",
        },
        {
          id: "Zespół 2",
          additional: "Marketing",
        },
        {
          id: "Zespół 3",
          additional: "Analitycy",
          children: [
            {
              id: "Podzespół 3.1",
              additional: "Kalendarz",
            },
            {
              id: "Podzespół 3.2",
              additional: "Kokpit",
            },
            {
              id: "Podzespół 3.3",
              additional: "Widok",
            },
            {
              id: "Podzespół 3.4",
              additional: "Różności",
            },
            {
              id: "Podzespół 3.5",
              additional: "Szukaj",
            },
          ],
        },
        {
          id: "Zespół 4",
          additional: "Programiści",
          children: [
            {
              id: "Podzespół 4.1",
              additional: "Front-end",
            },
            {
              id: "Podzespół 4.2",
              additional: "Middle-front-end",
            },
            {
              id: "Podzespół 4.3",
              additional: "Middle-end",
            },
            {
              id: "Podzespół 4.4",
              additional: "Middle-back-end",
            },
            {
              id: "Podzespół 4.5",
              additional: "Back-end",
            },
          ],
        },
      ],
    },
    {
      id: "Pododdział 2",
      type: "radio",
      children: [
        {
          id: "Zespół 5",
        },
        {
          id: "Zespół 6",
        },
      ],
    },
    {
      id: "Pododdział 3",
      type: "radio",
      children: [
        {
          id: "Zespół 7",
        },
        {
          id: "Zespół 8",
        },
      ],
    },
    {
      id: "Niezrzeszeni",
      children: [
        {
          id: "Mariusz Pudzianowski",
        },
        {
          id: "Polska gurom :)",
        },
      ],
    },
  ],
};

export default data;

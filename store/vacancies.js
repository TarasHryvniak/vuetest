const initializeStates = () => {
    return {
        vacancies: [{
            title: "labore",
            description: "Sit exercitation ipsum magna deserunt laboris aliquip commodo adipisicing amet dolor sint incididunt pariatur.",
            dates: [
                {
                    date: "Saturday-11-2014",
                    starttime: "11:44",
                    endtime: "02:25",
                    price: 0,
                    type: "Telephone"
                },
                {
                    date: "Friday-10-2019",
                    starttime: "05:39",
                    endtime: "01:43",
                    price: 0,
                    type: "Telephone"
                },
            ]
        },
        {
            title: "officia",
            description: "Lorem nulla ex ex consequat excepteur ex eiusmod anim officia cillum.",
            dates: [
              {
                date: "Wednesday-11-2020",
                starttime: "09:05",
                endtime: "04:56",
                price: 0,
                type: "Telephone"
              },
            ]
        }
    ]
    };
  };

export const state = () => initializeStates();

export const getters = {
    getVacancies: (state) => state.vacancies,
  };

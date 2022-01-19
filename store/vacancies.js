const initializeStates = () => {
    return {
        vacancies: [{
            title: "labore",
            description: "Sit exercitation ipsum magna deserunt laboris aliquip commodo adipisicing amet dolor sint incididunt pariatur.",
            dates: [
                {
                    date: "2022-01-03T22:00:00.000Z",
                    starttime: "2022-01-03T22:01:30.000Z",
                    endtime: "2022-01-03T22:05:00.000Z",
                    price: 100,
                    type: "Telephone"
                },
                {
                    date: "2022-01-03T22:00:00.000Z",
                    starttime: "2022-01-03T22:06:00.000Z",
                    endtime: "2022-01-03T22:10:00.000Z",
                    price: 200,
                    type: "Telephone"
                },
            ]
        },
        {
            title: "officia",
            description: "Lorem nulla ex ex consequat excepteur ex eiusmod anim officia cillum.",
            dates: [
              {
                date: "2022-01-03T22:00:00.000Z",
                starttime: "2022-01-03T22:00:00.000Z",
                endtime: "2022-01-03T22:12:00.000Z",
                price: 300,
                type: "Telephone"
              },
            ]
        }
    ]
    };
  };

export const state = () => initializeStates();

export const actions = {
  edit({commit}, data){
    const vacancies = state().vacancies
    vacancies[data.id] = {
      title: data.title,
      description: data.description,
      dates: data.dates
    }
    commit('saveEdited', vacancies);
  },
  add({commit}, data){
    commit('addVacancy', data)
  },
  delete({commit}, data){
    const vacancies = state().vacancies
    vacancies.splice(data.id, 1)
    commit('deleteVacancy', data)
  },
  filter({commit}, data){
    const oldVacancies = state().vacancies
    const vacancies = oldVacancies.filter(vacancy => {
      let isCorrect = false
      vacancy.dates.forEach(date => {
        if(date.price < data.value)isCorrect = true
      })

      return isCorrect
      
    })
    commit('saveEdited', vacancies)
  }
}

export const mutations = {
  saveEdited(state, data){
    state.vacancies = data
  },
  deleteVacancy(state, data){
    state.vacancies.splice(data.id, 1)
  },
  addVacancy(state, data){
    state.vacancies.push({...data})
  }
}

export const getters = {
    getVacancies: (state) => state.vacancies,
  };

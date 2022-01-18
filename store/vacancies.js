const initializeStates = () => {
    return {
        vacancies: [{
            title: "labore",
            description: "Sit exercitation ipsum magna deserunt laboris aliquip commodo adipisicing amet dolor sint incididunt pariatur.",
            dates: [
                {
                    date: "2022-01-03T22:00:00.000Z",
                    starttime: "11:44",
                    endtime: "02:25",
                    price: 100,
                    type: "Telephone"
                },
                {
                    date: "2022-01-03T22:00:00.000Z",
                    starttime: "05:39",
                    endtime: "01:43",
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
                starttime: "09:05",
                endtime: "04:56",
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
    /*const vacancies = state().vacancies
    console.log(commit)
    vacancies.push({...data})*/
    commit('addVacancie', data)
  },
  delete({commit}, data){
    const vacancies = state().vacancies
    vacancies.splice(data.id, 1)
    commit('saveEdited', vacancies)
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
  addVacancie(state, data){
    state.vacancies.push({...data})
  }
}

export const getters = {
    getVacancies: (state) => state.vacancies,
  };

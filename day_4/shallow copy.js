
             const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
              user.preferences.language='hindi'
              console.log(user)
              
              let copyUser={...user}
              copyUser.name='nigama'
              copyUser.preferences.theme='white'
              copyUser.preferences.language='tel'
              console.log(copyUser)


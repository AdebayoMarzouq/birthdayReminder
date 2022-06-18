import React from 'react'

const List = ({ people, setPeople }) => {
  return (
    <>
      {people
        ? people.map((person) => {
            const { id, name, age, image } = person
            return (
              <article key={id} className='person'>
                <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                  <button
                    onClick={() =>
                      setPeople(people.filter((person) => person.id !== id))
                    }
                  >
                    X
                  </button>
                </div>
              </article>
            )
          })
        : (
              <article className='person'>
                <h4>0 Birthdays today</h4>
              </article>
            )
      }
    </>
  )
}

export default List

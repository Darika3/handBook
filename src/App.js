import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/section/Section';

const App = () => {
  const users = [
    {
      name: 'Darika',
      lastName: 'Zholborsova',
      age:18,
      id: Date.now(),

    },
    {
      name: 'Aidai',
      lastName: 'Nadyrbekova',
      age:19,
      id: Date.now(),

    },
    {
      name: 'Emir',
      lastName: 'Soltonbekov',
      age:19,
      id: Date.now(),

    },
    {
      name: 'Begimai',
      lastName: 'Erkinova',
      age:17,
      id: Date.now(),

    }
  ];

  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />    
    </div>
  )
}

export default App
import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {

  const data = [
    
    {image:"https://images.unsplash.com/photo-1725531568523-49f7d82412e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" , name:"Umesh" , artist:"Batch: B26" , added: true},
    {image:"https://plus.unsplash.com/premium_photo-1725268465524-0fa49ff64a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" , name:"Sohel" , artist:"Batch: B26" , added: false},
    {image:"https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D" , name:"sunita" , artist:"Batch: B28" , added: true},
    {image:"https://media.istockphoto.com/id/2005119463/photo/indian-frustrated-lonely-teenager-male-burst-of-anger-feeling-bad-hurt-upset-sitting-alone-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=9bnniMddbIPl-BInv1KHYbIM8qZTVguuA1fo_FdoEuE=" , name:"manoj bhaiya" , artist:"Batch: B29" , added: false},
    {image:"https://media.istockphoto.com/id/1700139428/photo/small-six-months-old-cute-indian-baby-boy-wearing-diaper-lying-on-floor-isolated-over-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=3eArsx9gAJKJlYkWyFyp6w7dXuQ0qGfIg9R89ZqIKiA=" , name:"Manish babu" , artist:"Batch: B30 " , added: false},
    {image:"https://media.istockphoto.com/id/1205335238/photo/cute-boy-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=X0ydrJjsrb7PermUkfoZMbKfd2Lg4IAY6F8jNOe7EqE=" , name:"Vikash babu" , artist:"Batch: P16" , added: false},
    {image:"https://media.istockphoto.com/id/2070263497/photo/teenage-boys-studying-at-home-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=3O8IGz8u1V4OyG4H0ws9BCFxqhbaA6SI1Oxr6dgHLYk=" , name:"Umesh babu" , artist:"Batch: MERN-12" , added: false},
    {image:"https://images.unsplash.com/photo-1725531568523-49f7d82412e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" , name:"Umesh" , artist:"Batch: B24" , added: true},
    {image:"https://plus.unsplash.com/premium_photo-1725268465524-0fa49ff64a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" , name:"Shrinath mahto" , artist:"Batch: B26" , added: false},
    {image:"https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D" , name:"Sonali verma" , artist:"Batch: B31" , added: true},
    {image:"https://media.istockphoto.com/id/2005119463/photo/indian-frustrated-lonely-teenager-male-burst-of-anger-feeling-bad-hurt-upset-sitting-alone-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=9bnniMddbIPl-BInv1KHYbIM8qZTVguuA1fo_FdoEuE=" , name:"manoj" , artist:"Batch: B26" , added: false},
    {image:"https://media.istockphoto.com/id/1700139428/photo/small-six-months-old-cute-indian-baby-boy-wearing-diaper-lying-on-floor-isolated-over-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=3eArsx9gAJKJlYkWyFyp6w7dXuQ0qGfIg9R89ZqIKiA=" , name:"Manish babu" , artist:"bachha " , added: false},
    {image:"https://media.istockphoto.com/id/1205335238/photo/cute-boy-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=X0ydrJjsrb7PermUkfoZMbKfd2Lg4IAY6F8jNOe7EqE=" , name:"Vikash babu" , artist:"Batch: J30 " , added: false},
    {image:"https://media.istockphoto.com/id/2070263497/photo/teenage-boys-studying-at-home-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=3O8IGz8u1V4OyG4H0ws9BCFxqhbaA6SI1Oxr6dgHLYk=" , name:"Umesh babu" , artist:"Batch: DS-07" , added: false},
    {image:"https://images.unsplash.com/photo-1725531568523-49f7d82412e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" , name:"Umesh" , artist:"Batch: MERN-11" , added: true},
    {image:"https://plus.unsplash.com/premium_photo-1725268465524-0fa49ff64a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" , name:"sohel" , artist:"coder" , added: false},
    {image:"https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D" , name:"Manita kumari" , artist:"Batch: B26" , added: true},
    {image:"https://media.istockphoto.com/id/2005119463/photo/indian-frustrated-lonely-teenager-male-burst-of-anger-feeling-bad-hurt-upset-sitting-alone-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=9bnniMddbIPl-BInv1KHYbIM8qZTVguuA1fo_FdoEuE=" , name:"Harshit sahu" , artist:"Batch: Ds-06" , added: false},
    {image:"https://media.istockphoto.com/id/1700139428/photo/small-six-months-old-cute-indian-baby-boy-wearing-diaper-lying-on-floor-isolated-over-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=3eArsx9gAJKJlYkWyFyp6w7dXuQ0qGfIg9R89ZqIKiA=" , name:"ashok" , artist:"Batch: N20" , added: false},
    {image:"https://media.istockphoto.com/id/1205335238/photo/cute-boy-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=X0ydrJjsrb7PermUkfoZMbKfd2Lg4IAY6F8jNOe7EqE=" , name:"Vikash babu" , artist:"Batch: N18 " , added: false},
    
    {image:"https://media.istockphoto.com/id/2070263497/photo/teenage-boys-studying-at-home-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=3O8IGz8u1V4OyG4H0ws9BCFxqhbaA6SI1Oxr6dgHLYk=" , name:"Umesh babu" , artist:"Batch: DS-07" , added: false},
    {image:"https://images.unsplash.com/photo-1725531568523-49f7d82412e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" , name:"Umesh" , artist:"Batch: MERN-11" , added: true},
    {image:"https://plus.unsplash.com/premium_photo-1725268465524-0fa49ff64a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" , name:"sohel" , artist:"coder" , added: false},
    {image:"https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D" , name:"Manita kumari" , artist:"Batch: B26" , added: true},
    {image:"https://media.istockphoto.com/id/2005119463/photo/indian-frustrated-lonely-teenager-male-burst-of-anger-feeling-bad-hurt-upset-sitting-alone-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=9bnniMddbIPl-BInv1KHYbIM8qZTVguuA1fo_FdoEuE=" , name:"Harshit sahu" , artist:"Batch: Ds-06" , added: false},
    {image:"https://media.istockphoto.com/id/1700139428/photo/small-six-months-old-cute-indian-baby-boy-wearing-diaper-lying-on-floor-isolated-over-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=3eArsx9gAJKJlYkWyFyp6w7dXuQ0qGfIg9R89ZqIKiA=" , name:"ashok" , artist:"Batch: N20" , added: false},
    {image:"https://media.istockphoto.com/id/1205335238/photo/cute-boy-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=X0ydrJjsrb7PermUkfoZMbKfd2Lg4IAY6F8jNOe7EqE=" , name:"Vikash babu" , artist:"Batch: N18 " , added: false},
    {image:"https://media.istockphoto.com/id/2070263497/photo/teenage-boys-studying-at-home-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=3O8IGz8u1V4OyG4H0ws9BCFxqhbaA6SI1Oxr6dgHLYk=" , name:"Sona" , artist:"Batch: ANDROID" , added: false},
    {image:"https://media.istockphoto.com/id/2070263497/photo/teenage-boys-studying-at-home-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=3O8IGz8u1V4OyG4H0ws9BCFxqhbaA6SI1Oxr6dgHLYk=" , name:"Sona" , artist:"Batch: ANDROID" , added: false},
  ];

  const [songData , setSongData] = useState(data)
  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((item , itemindex)=>{
        if(itemindex=== index) return {...item, added:!item.added};
        return item
      })
    })
  }

  


  return (
    <>
      <Navbar data={songData} />
      <div className="px-20 flex flex-wrap "> 
        {songData.map((obj ,index)=>(
          <Card image={obj.image}  name= {obj.name} artist= {obj.artist} added= {obj.added} handleClick = {handleClick} index={index} key={index}/>
        ))}
      </div>
    </>
  );
}

export default App;

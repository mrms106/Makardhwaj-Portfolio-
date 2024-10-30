import ProjectBox from "./projectBox"
import fitnessimg from '../../assets/fitness.png'
import movieimg from '../../assets/movie.png'
export default function ProjectBoxMain(){
    return(
        <>
        <div className="projectbox">
          <ProjectBox 
          projectClass="card card2"
          link="https://ssfixturing.com/"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmai0sFBMxQsOGNa4YkXG_RpEWRC5dUapz3w&s" 
          heading="SS Fixturing"
          paragraph="The website serves as a testament to my skills in crafting user-friendly interfaces and implementing interactive features."
          />
          <ProjectBox 
          projectClass="card"
          link="https://vacation-rental-website.onrender.com"
          image="https://imadtravel.com/wp-content/uploads/2023/05/Benefits-of-Booking-with-a-Travel-Agent_IMAD-Travel.webp" 
          heading="Wanderlust- Vacation rental"
          paragraph="Built a dynamic vacation rental platform using HTML, CSS, JavaScript, Node.js, and MongoDB, showcasing full-stack development expertise."

          />
          <ProjectBox 
          projectClass="card"
          link="https://vegetables-fruits-online-buying.onrender.com"
          image="https://www.marketgalee.com/images/blog/bedc0a350c32cfdba175948999e2b34f.png" 
          heading="Vegetables and Fruits-Buying Online"
          paragraph="Revolutionizing shopping with Node.js, HTML/CSS/JS, and MongoDB for a seamless experience."
          />
          <ProjectBox
          projectClass="card card2"
          link="https://weather-hho6.onrender.com/"
          image="https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1600"
          heading="Weather App"
          paragraph="Stay ahead with WeatherNow! Node.js powers real-time weather updates for your location or any city worldwide. Simple, sleek, and always on point."
           />
          <ProjectBox
          projectClass="card"
          link="https://ridego-webpage.onrender.com/"
          image="https://ridego-webpage.onrender.com/ridelogo.png"
          heading="Ride-GO -- Bike rental company website"
          paragraph="Crafted to perfection, boasting a sleek design and seamless navigation tailored to my client's requirements."
           />
           <ProjectBox
          projectClass="card card2"
          link="https://dhwajcode.22web.org/"
          image={fitnessimg}
          heading="Fitness -- Android-app"
          paragraph="the ultimate fitness app designed to help you stay on top of your health and workout goals."
           />
            <ProjectBox
          projectClass="card "
          
          image={movieimg}
          heading="Movies -- Android-app"
          paragraph="Explore movies with ease! Get quick access to cast, ratings, and summaries all in one app, perfect for movie lovers on the go!"
           />
    </div>
        </>
    )
}
import InfoBox from "./infoBox"
export default function MainInfoBox(){
    return(
        <>
          <InfoBox
            infoclass="contacticon p"
            icon={<i className="fa-solid fa-mobile-screen"></i>}
            title="phone"
            info="+91 779831**13"
           />
           <InfoBox
            infoclass="contacticon e"
            icon={<i className="fa-solid fa-envelope-open-text"></i>}
            title="Email"
            info="mhs93679@gmail.com"
           />
           <InfoBox
            infoclass="contacticon lo"
            icon={<i className="fa-solid fa-location-dot"></i>}
            title="Location"
            info="Karve Nager, Pune"
           />
           <InfoBox
            style={{ borderBottom: "none" }}
            infoclass="contacticon b"
            icon={<i className="fa-regular fa-calendar-days"></i>}
            title="Birthday"
            info="June 10, 2001"
           />
        </>
    )
}
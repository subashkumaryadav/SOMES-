import React from "react";
import Layout from "../../components/layout/Layout";
import { FaFacebook, FaPhone,FaVoicemail } from "react-icons/fa";
import './committee.css';
import datas from "../../data/members/member.js";
import president from "../../data/assets/members/ANIL.jpg";
import { Link } from "react-router-dom";
const Committee = () => {
  return <Layout title={"Committee-SOMES"}>
     <div id='committe'>
        <h1 className='model-title'> Current Working Committee </h1>
        <div className="divider"></div>
        <div className="members">
          <div className="president">
          <div className="member">
            <img width={150} height={150} src={president} alt="Image loading.."/>
            <div className="description">
                <h1>Anil Dangi</h1>
                <h2>President</h2>
                <div className="social-media">
                <Link to={`http://www.facebook.com/profile.php?id=100067051394183`} target="_blank" > <FaFacebook /></Link> 
                 <Link to={`tel:9863450956`} target="_blank" ><FaPhone /></Link> 
                 <Link to={`mailto:Rolayak297@gmail.com`} target="_blank" > <FaVoicemail /> </Link>
                </div>
            </div>
          </div>
          </div>
          <div className="gmember">
            {datas.map((member)=>{

           
          return <div className="member" key={member.id}>
            <img width={200} height={200} src={member.image} alt="Image Loading" />
            <div className="description">
                <h1>{member.name}</h1>
                <h2>{member.position}</h2>
                <div className="social-media">
                <Link to={`http://www.facebook.com/${member.facebook}`} target="_blank" > <FaFacebook /></Link> 
                 <Link to={`tel:${member.phone}`} target="_blank" ><FaPhone /></Link> 
                 <Link to={`mailto:${member.email}`} target="_blank" > <FaVoicemail /> </Link>
                
                </div>
            </div>
          </div>
           })}
        
          </div>
        </div>
    </div>
  </Layout>;
};

export default Committee;


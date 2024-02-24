import React, { useEffect, useState } from 'react'
import './InfoGymSettings.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
function InfoGymSettings() {
    const navigate = useNavigate();
    const {gymid} = useParams();
    const [dataGym, setDataGym] = useState(null);
    const [dataPlan, setDataPlan] = useState(null);
    const [dataLitePlan, setDataLitePlan] = useState(null);
    const [dataGoldPlan, setDataGoldPlan] = useState(null);
    const [dataLProPlan, setDataProPlan] = useState(null);
    console.log(dataLitePlan);
    const [nameGym , setNameGym] = useState(null);
    const [descriptionGym, setDescriptionGym] = useState(null);


    const [pricePlanLite, setPricePlanLite] = useState(null);
    const [monthSupLite, setMonthSupLite] = useState(null);
    const [descPlanLite, setDescPlanLite] = useState(null);

    
    const [pricePlanGold, setPricePlanGold] = useState(null);
    const [monthSupGold, setMonthSupGold] = useState(null);
    const [descPlanGold, setDescPlanGold] = useState(null);

    
    const [pricePlanPro, setPricePlanPro] = useState(null);
    const [monthSupPro, setMonthSupPro] = useState(null);
    const [descPlanPro, setDescPlanPro] = useState(null);


    const [showAlert, setShowAlert] = useState(false);
    const state = useSelector((state)=>{
        return{
        userId : state.auth.userId,
        token : state.auth.token
        }
      })


    const config = {
        headers: { Authorization: `Bearer ${state.token}` }
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/gyms/${gymid}`,config).then((result) => {
            setDataGym(result.data.oneGym);
            axios.get(`http://localhost:5000/gyms/plan/${gymid}`,config).then((resultPlan) => {
                resultPlan.data.plans.map((e,i)=>{
                    if(e.name_plan === 'Lite'){
                        setDataLitePlan(e);
                    }
                    if(e.name_plan === 'Gold'){
                        setDataGoldPlan(e);
                    }
                    if(e.name_plan === 'Premium'){
                        setDataProPlan(e);
                    }
                })
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    },[])

    useEffect(() => {
      if (showAlert) {
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    }, [showAlert]);

  return (
    <div className='info-body'>
        <div className='contener-info-gym-settings'>
            <div className='continer-image-gym-settings'>
                <img className='image-gym-settings' src='https://img.freepik.com/free-vector/cute-man-lifting-barbell-gym-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated_138676-6223.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708041600&semt=ais'/>
            </div>
            
            <div className='name-desc-gym-settings'>
                <textarea className='info-gym-textarea' defaultValue={dataGym && dataGym.name} onChange={(e)=>{
                    setNameGym(e.target.value);
                }}/>
                <textarea className='desc-gym-settings info-gym-textarea' defaultValue={dataGym && dataGym.description} onChange={(e)=>{
                    setDescriptionGym(e.target.value);
                }}/>
            </div>
        </div>

        <div className='continer-plan-settings'>
        {dataLitePlan || dataGoldPlan || dataLProPlan ? <>
            <div className='lite-plan plan-settings' style={dataLitePlan ? {display:"flex"} : {display:"none"}}>
            <div className='name-price-month-plan-settings'>
                <h4 className='name-plan-settings'>{dataLitePlan && dataLitePlan.name_plan}</h4>
                <h5 className='price-plan-settings' >Price $<input className='price-plan-settings-input' defaultValue={dataLitePlan && dataLitePlan.price_plan} onChange={(e)=>{
                    setPricePlanLite(e.target.value);
                }}/></h5>
                <h5 className='month-plan-settings'>per <input className='price-plan-settings-input' defaultValue={dataLitePlan && dataLitePlan.numofmonth_plan} onChange={(e)=>{
                    setMonthSupLite(e.target.value);
                }}/> Month</h5>
            </div>

            <div className='description-plan-settings'>
                <textarea className='textarea-desc' defaultValue={dataLitePlan && dataLitePlan.description_plan} onChange={(e)=>{
                    setDescPlanLite(e.target.value);
                }}/>
            </div>

        </div>
        <div className='gold-plan plan-settings'>
            <div className='name-price-month-plan-settings'>
                <h4 className='name-plan-settings'>Gold</h4>
                <h5 className='price-plan-settings' >Price $<input className='price-plan-settings-input' defaultValue={dataGoldPlan && dataGoldPlan.price_plan} onChange={(e)=>{
                    setPricePlanGold(e.target.value);
                }}/></h5>
                <h5 className='month-plan-settings'>per <input className='price-plan-settings-input' defaultValue={dataGoldPlan && dataGoldPlan.numofmonth_plan} onChange={(e)=>{
                    setMonthSupGold(e.target.value);
                }}/> Month</h5>
            </div>

            <div className='description-plan-settings'>
            <textarea className='textarea-desc' defaultValue={dataGoldPlan && dataGoldPlan.description_plan} onChange={(e)=>{
                setDescPlanGold(e.target.value);
            }}/>
            </div>

        </div>
        <div className='premium-plan plan-settings' style={dataLProPlan ? {display:"flex"} : {display:"none"}}>
            <div className='name-price-month-plan-settings'>
                <h4 className='name-plan-settings'>Premium</h4>
                <h5 className='price-plan-settings' >Price $<input className='price-plan-settings-input' defaultValue={dataLProPlan && dataLProPlan.price_plan} onChange={(e)=>{
                    setPricePlanPro(e.target.value);
                }}/></h5>
                <h5 className='month-plan-settings'>per <input className='price-plan-settings-input' defaultValue={dataLProPlan && dataLProPlan.numofmonth_plan} onChange={(e)=>{
                    setMonthSupPro(e.target.value);
                }}/> Month</h5>
            </div>

            <div className='description-plan-settings'>
            <textarea className='textarea-desc' defaultValue={dataLProPlan && dataLProPlan.description_plan} onChange={(e)=>{
                setDescPlanPro(e.target.value)
            }}/>
            </div>
            
        </div>
        
        </>: <div style={{width:"100%", height:"100%", alignItems:"center", textAlign:"center"}}>Loading...</div>}
      
        </div>

        <div style={{height:"5%"}}>
            <button style={{width:"50%", border:"0", backgroundColor:"#A1E533", borderRadius:"4px", padding:"4px"}} onClick={()=>{
                if(nameGym || descriptionGym){
                axios.put(`http://localhost:5000/gyms/${gymid}`, {name : nameGym, description : descriptionGym}, config).then((result) => {
                    setNameGym(null);
                    setDescriptionGym(null);
                    setShowAlert(true);

                }).catch((err) => {
                    console.log(err);
                });
                }
                if(!dataLitePlan){
                    if(pricePlanLite || monthSupLite || descPlanLite){
                        axios.post(`http://localhost:5000/gyms/${gymid}/plan/create`, 
                        {name: "Lite", description : descPlanLite, numOfMonth:monthSupLite, price : pricePlanLite},
                        config).then((result) => {
                            setShowAlert(true);
                        }).catch((err) => {
                            console.log(err);
                        });
                    }
                    
                }else
                if(pricePlanLite || monthSupLite || descPlanLite){
                    
                }

                if(!dataGoldPlan){
                    if(pricePlanGold || monthSupGold || descPlanGold){
                        axios.post(`http://localhost:5000/gyms/${gymid}/plan/create`, 
                        {name: "Gold", description : descPlanGold, numOfMonth:monthSupGold, price : pricePlanGold},
                        config).then((result) => {
                            setShowAlert(true);
                        }).catch((err) => {
                            console.log(err);
                        });
                    }
                   
                }else
                if(pricePlanGold || monthSupGold || descPlanGold){

                }
                if(!dataLProPlan){
                    if(pricePlanPro || monthSupPro || descPlanPro){
                    axios.post(`http://localhost:5000/gyms/${gymid}/plan/create`, 
                    {name: "Gold", description : descPlanPro, numOfMonth:monthSupPro, price : pricePlanPro},
                    config).then((result) => {
                        setShowAlert(true);
                    }).catch((err) => {
                        console.log(err);
                    });
                    }
                }else
                if(pricePlanPro || monthSupPro || descPlanPro){
                    
                }

            }}>Save Change</button>
        </div>
    
    {showAlert && (
        <div style={{width:"fit-content",backgroundColor:"green", 
        borderRadius:"4px",
        padding:"10px", height:"fit-content", position: "fixed", bottom:"4%", right:"2%"}}>
          Successfully Updated
        </div>
      )}
    </div>
  )
}

export default InfoGymSettings

   const submitBtn = document.getElementById('submitBtn')
   const cityName = document.getElementById('cityname')
   const city_Name = document.getElementById('city_name')
   const temp_status =document.getElementById('temp_status')
   const tempreture =document.getElementById('tempreture')
   const middle_layer =document.querySelector('.middle_layer')
   const day= document.getElementById('day')
   const currentTime= document.querySelector('.currentTime')
   const today_date= document.getElementById('today_date')

   
     
   const getInfo =async(e)=>{
   e.preventDefault();
   let cityval = cityName.value
   if(cityval ===""){
   city_Name.innerText='plz write the name befor search'
   middle_layer.classList.add('data_hide')
   }else{
    

       let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
           const response = await fetch(url)
        //    console.log(response);
        if(response.ok == true){
            const data = await response.json()
            const arrData = [data]
            tempreture.innerText= arrData[0].main.temp;
            city_Name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            
            // conditon to check weather
            const tempStatus = arrData[0].weather[0].main;
            if (tempStatus == "Sunny") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempStatus == "Rainy") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i> <p>Rainy</p>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color:#eccc68;'>clear</i>";
            }

           middle_layer.classList.remove('data_hide')

            
        }else{
            // console.log(new Error('please write name propertly'));
            city_Name.innerText='plz write the name properly '
            middle_layer.classList.add('data_hide')
        }

   }

   }
 
   const CurrentDate = ()=>{
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let nowDate = new Date()
    
    //  console.log(mL[nowDate.getMonth()]);
    //  console.log(nowDate.getDate());
    //  console.log(`${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`);
     
    const setCurrentTime=()=>{
        let nowDate = new Date()
        let hours=nowDate.getHours();
        let minutes=nowDate.getMinutes();
        let seconds=nowDate.getSeconds();
        currentTime.innerText= `${hours} : ${minutes} : ${seconds}`
    }

     setInterval(() => {
        setCurrentTime();
     }, 1000);


     day.innerText=`${daysInWeek[nowDate.getDay()]}`
     today_date.innerText=`${nowDate.getDate()} ${mL[nowDate.getMonth()].slice(0,3)}`

   }
   
   (function(){
    CurrentDate()
   })();

   submitBtn.addEventListener('click',getInfo)
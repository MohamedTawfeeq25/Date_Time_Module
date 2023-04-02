const date=new Date();
function Day(){
	var day=date.getDay();
	var ret;
	switch(day){
		case 0:
		ret="Sunday";
		break;
		case 1:
		ret="Monday";
		break;
		case 2:
		ret="Tuesday";
		break;
		case 3:
		ret="Wednesday";
		break;
		case 4:
		ret="Thursday";
		break;
		case 5:
		ret="Friday";
		break;
		case 6:
		ret="Saturday";
		break;
		default:
		ret="invalid";
	}
	return ret;
}
function Month(){
	var month=date.getMonth();
	var ret;
	switch(month){
		case 0:
		ret="January"
		break;
		case 1:
		ret="February"
		break;
		case 2:
		ret="March"
		break;
		case 3:
		ret="April"
		break;
		case 4:
		ret="May"
		break;
		case 5:
		ret="June"
		break;
		case 6:
		ret="July"
		break;
		case 7:
		ret="August"
		break;
		case 8:
		ret="September"
		break;		
		case 9:
		ret="October"
		break;
		case 10:
		ret="November"
		break;
		case 11:
		ret="December"
		break;
	}
	return ret;
}
function Dyear(){
	datt=Day()+","+date.getDate()+" "+ Month()+" "+date.getFullYear();
	return datt;
}


function Standard_Time(){
	var hour;var period;
    var Minutes;
    var Seconds;
    if(date.getMinutes()<10){
        Minutes="0"+date.getMinutes();
    }
    else{
        Minutes=date.getMinutes();
    }
    if(date.getSeconds()<10){
        Seconds="0"+date.getSeconds();
    }
    else{
        Seconds=date.getSeconds();
    }
	if(date.getHours()<12){
        hour=date.getHours(); 
        period="am";  
	}
	else{
        period="pm"; 
		switch(date.getHours()){
			case 13:
			    hour=01;
			    break;
			case 14:
                hour=02;
			    break;
			case 15:
                hour=03;
			    break;
			case 16:
                hour=04;
			    break;
			case 17:
                hour=05;
			    break;
			case 18:
                hour=06;
			    break;
			case 19:
                hour=07;
			    break;
			case 20:
                hour=08;
			    break;
			case 21:
                hour=09;
			    break;
			case 22:
                hour=10;
			    break;
			case 23:
                hour=11;
			    break;
			default:
                hour=12;
			   

		}
	}
    var Time=hour+":"+Minutes+":"+Seconds+" "+period;
    return Time;
}
function Railway_Time(){
	var hour;
    var Minutes;
    var Seconds;
    if(date.getMinutes()<10){
        Minutes="0"+date.getMinutes();
    }
    else{
        Minutes=date.getMinutes();
    }
    if(date.getSeconds()<10){
        Seconds="0"+date.getSeconds();
    }
    else{
        Seconds=date.getSeconds();
    }
	if(date.getHours()<10){
		hour="0"+date.getHours();
	}
	else{
		hour=date.getHours();
	}
    var Time=hour+":"+Minutes+":"+Seconds;
    return Time;
}
console.log(Dyear());
console.log(Standard_Time());
console.log(Railway_Time());

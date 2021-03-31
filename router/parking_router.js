var express = require('express');
var moment = require('moment');
var tz = require('moment-timezone');
var router = express.Router();

router.get('/parkinginfo', (req, res) => {
    moment.tz.setDefault("Asia/Seoul");
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
    console.log('command : ' + req.query.command + ' carno : '+ req.query.carno);
    if(req.query.command != 'parkingcarno' || !req.query.carno){
        res.json(fail_json);
        return;
    }else if(req.query.carno == 1234){ 
        res.json(success_json);
        return;
    }else if(req.query.carno == 4567){
        res.json(first_floor_json);
        return;
    }else{
        res.json(empty_json);
        return;
    }
});

module.exports = router;

let fail_json = {
    "response": {
        "cmd": "parkingcarno",
        "result": "Error",
        "result_msg": "NO Search Data",
        "data": []
    }
}
let empty_json = {
    "response": {
        "cmd": "parkingcarno",
        "result": "Error",
        "result_msg": "carno empty",
        "data": ""
    }
}

let success_json = {
    "response": {
        "cmd": "parkingcarno",
        "result": "OK",
        "result_msg": "",
        "data": [
            {
                "parking_sn": 20,       		//면번호
	            "parking_lot_name": "1-9-2",		//면이름
                "BFA_code": "B1BF3A1",       
                "building_name": "SKT 타워", 		//건물이름
                "floor_name": "B1F",       		//층정보
                "area_name": "B1F-06", 		//기둥정보
                "car_no": "19거1555",   		//차량정보
                "enter_dtm": "2018-12-11 09:17:44",  	//입차시각 (최신판별시각기준)
                "img_path": "" 			// 실제 현장은 "" 로 리턴됨.
            }
        ]
    }
}


let first_floor_json = {
    "response": {
        "cmd": "parkingcarno",
        "result": "OK",
        "result_msg": "",
        "data": [
            {
                "parking_sn": 0,       		
                "parking_lot_name": "",		
                "BFA_code": "1F",       
                "building_name": "SKT 타워", 		
                "floor_name": "1F",       		
                "area_name": "1F", 		
                "car_no": "19거4657",   		
                "enter_dtm": "2018-12-11 09:17:44",	
                "img_path": ""
            }
        ]
    }
};
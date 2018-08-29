/* Обновляет всю информацию на странице */
/* data_type - должна соответствовать идентификатору вкладки
 */
function update_data(data_type='all', build_btns=false, showing_message=true) {
    sendform(null, 'get_data', {answer_type: showing_message ? undefined : 'ButtonProgress', data: {data_type:data_type}, func_success: function(res, arg) {
        //alert(JSON.stringify(res));
        
        if (data_type === 'managing' || data_type === 'all') { // строим панель до обновления состояния кнопок
            
            document.getElementById('managing_btn_color').value = '#' + parseInt(res.data.color).toString(16).padStart(6, '0');
            document.getElementById('managing_btn_brightness').value = res.data.brightness;
            document.getElementById('managing_btn_turn').dataset.value = res.data.turn;
            
            document.getElementById('stat_vcc').textContent = res.data.stat.vcc;
            document.getElementById('stat_time').textContent = res.data.stat.time_h +":"+ res.data.stat.time_m +":"+ res.data.stat.time_s;
        }
        if (data_type === 'set' || data_type === 'all') {
            
            document.getElementById('form_device_name').device_name.value = res.data.settings.device_name;
            
            document.getElementById('form_wifi_mode').wifi_mode.value = res.data.settings.wifi_mode;
            
            document.getElementById('form_wifi_wifi').password.value = res.data.settings.password;
            document.getElementById('form_wifi_wifi').ssid.value = res.data.settings.ssid;
            document.getElementById('form_wifi_wifi').passwordAP.value = res.data.settings.passwordAP;
            document.getElementById('form_wifi_wifi').ssidAP.value = res.data.settings.ssidAP;
            
            document.getElementById('form_other').update_time.value = res.data.settings.update_time;
        }
        
        cs.updater_set_time(res.data.update_time);
    }});
}

function get_rtc_browser() {
    let d = new Date();
    return {
        date: d.getFullYear().toString().padStart(4, '0')+'-'+(d.getMonth()+1).toString().padStart(2, '0')+'-'+d.getDate().toString().padStart(2, '0'),
        time: d.getHours().toString().padStart(2, '0')+':'+d.getMinutes().toString().padStart(2, '0') +':'+ d.getSeconds().toString().padStart(2, '0')
    };
}

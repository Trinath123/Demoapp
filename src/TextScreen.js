import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Back from '../src/Component/ScreenBackground';

const TextHeader = 'Coronavirus disease 2019';
const TextData = "Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).[8] The disease was first identified in December 2019 in Wuhan, the capital of China's Hubei province,"+
'and has since spread globally, resulting in the ongoing 2019–20 coronavirus pandemic.[9][10] Common symptoms include fever, cough and shortness of breath.[11] Other symptoms may include fatigue, muscle pain, diarrhea, sore throat, loss of smell and abdominal pain. While the majority of cases result in mild symptoms, some progress to viral pneumonia and multi-organ failure.[9][14] As of 8 April 2020, more than 1.43 million[7] cases have been reported in more than 200 countries and territories,[15] resulting in more than 82,100 deaths.[7] More than 301,000 people have recovered.[7]\n' +
'The virus is mainly spread during close contact[a] and by small droplets produced when those infected cough, sneeze or talk.[6][16][17] These droplets may also be produced during breathing; however, they rapidly fall to the ground or surfaces and are not generally spread through the air over large distances.[6][18][19] People may also become infected by touching a contaminated surface and then their face.[6][16] The virus can survive on surfaces for up to 72 hours.[20] It is most contagious during the first three days after onset of symptoms, although spread may be possible before symptoms appear and in later stages of the disease.[21] The time from exposure to onset of symptoms is typically around five days, but may range from two to 14 days.[11][22] The standard method of diagnosis is by real-time reverse transcription polymerase chain reaction (rRT-PCR) from a nasopharyngeal swab.[23] The infection can also be diagnosed from a combination of symptoms, ' +
'risk factors and a chest CT scan showing features of pneumonia.';

export default class TextScreen extends Component {
    render() {
        return (
            <View>
                <Back>
                    <Text style={{justifyContent:'center',alignItems:'center',fontSize:16,fontWeight:'500'}}>
                        {TextHeader}
                    </Text>
                    <Text style={{justifyContent:'center',alignItems:'center',fontSize:12,marginTop:15,
                    marginLeft:8,marginRight:8}}>
                        {TextData}
                    </Text>
                </Back>
            </View>
        );
    }
}

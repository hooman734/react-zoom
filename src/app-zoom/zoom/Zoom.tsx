import { FC, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ZoomContext from '../ZoomContext';
import { VideoClient } from '../AppZoomFrame';

type ClientType =
| VideoClient
| null;

const Zoom: FC<{}> = (): JSX.Element => {
    let client: ClientType = useContext(ZoomContext);
    const [link, linkSet] = useState<string>('');
    useEffect(() => {
        client?.init('en-US', 'Global');
    }, []);


    function joinMtg(): void {

        // get signature from API
        
        let signature = "";
        const topic = "Test Topic";
        const userName = "asd";
        const sessionPasscode = "";

        axios.post("https://zoom-signature-h.herokuapp.com/").then(res => signature = res.data.signature);
        
        client?.join(
        topic,
        signature,
        userName,
        sessionPasscode,
        ).then(() => {
        console.log('Join meeting success');
        }).catch((error) => {
        console.error(error);
        });
    }
  
    return (
    <>
        <form>
            <label>Insert Your Zoom Link</label>
            <br/>
            <input style={{width: '700px'}} type='text' value={link} onChange={($event) => linkSet($event.currentTarget.value)}></input>
        </form>
        <br/>
        <button onClick={joinMtg}>Join!</button>
    </>
    );
};

export default Zoom;
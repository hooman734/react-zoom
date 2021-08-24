import { JSXElement } from "@babel/types";
import React, { FC, useState } from "react";
import ZoomVideo from '@zoom/videosdk';
import ZoomContext from './ZoomContext';
import Zoom from './zoom/Zoom';

const client = ZoomVideo.createClient();
export type VideoClient = typeof client;

type AppZoomFrameProps = {
    name: string;
    id: number;
};

const AppZoomFrame: FC<AppZoomFrameProps> = (props: AppZoomFrameProps): JSX.Element => {

    return (
        <ZoomContext.Provider value={client}>
           
            <Zoom></Zoom>
        </ZoomContext.Provider>
    );
}

export default AppZoomFrame;
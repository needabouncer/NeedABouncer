import React from 'react';

import { Text, Embed, Image } from './SliceTypes';


const SliceRenderer = ({ slices }) => {
    if (slices) {
        return slices.map((slice, index) => {
            console.log(slice)
            const res = (() => {
                switch(slice.type){
                    case 'text':
                        return (
                            <div key={ index} className="page_slice_wrapper">
                                <Text slice={ slice} />
                            </div>
                        );
                    case 'embed':
                        return (
                            <div key={ index} className="page_slice_wrapper">
                                <Embed slice={ slice} />
                            </div>                       
                        );
                    case 'image':
                        return (
                            <div key={ index} className="page_slice_wrapper">
                                <Image slice={ slice} />
                            </div>                       
                        );
                    default: return;
                }
            })();
            return res
        })
    }

    else return null;
 
}

export default SliceRenderer;
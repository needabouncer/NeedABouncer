import React from 'react';

import { Text, Embed, Image, Accordion, Card, Form } from './SliceTypes';


const SliceRenderer = ({ slices }) => {
    if (slices) {
        return slices.map((slice, index) => {
            const res = (() => {
                switch(slice.type){
                    case 'text':
                        return (
                            <div key={ index} role="presentation" className="page_slice_wrapper">
                                <Text slice={ slice} />
                            </div>
                        );
                    case 'embed':
                        return (
                            <div key={ index } role="presentation" className="page_slice_wrapper">
                                <Embed slice={ slice} />
                            </div>                       
                        );
                    case 'image':
                        return (
                            <div key={ index} role="presentation"  className="page_slice_wrapper">
                                <Image slice={ slice} />
                            </div>                       
                        );
                    case 'form':
                        return (
                            <div key={ index} role="presentation"  className="page_slice_wrapper">
                                <Form slice={ slice} />
                            </div>                       
                        );
                    case 'group_acc':
                        return (
                            <div key={ index} role="presentation" className="page_slice_wrapper">
                                <Accordion slice={ slice.fields } />
                            </div>                       
                        );
                    case 'card':
                        console.log("Found cards")
                        return (
                            <div key={ index} role="presentation" className="page_slice_wrapper">
                                <Card slice={ slice.fields } />
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
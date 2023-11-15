import { Spin } from 'antd';
import React from 'react';

const Loading = () => {
    return (
        <div className="w-full h-full" >
            <Spin tip="Loading" />
        </div>
    )
}

export default Loading;
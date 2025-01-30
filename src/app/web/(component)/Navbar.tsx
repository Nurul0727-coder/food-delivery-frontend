'use client';

import {Button} from '@/components/ui/button';
import {useState} from 'react';
import { OrderSheets } from '../OrderSheets';

export const Navbar = () => {
    return(
        <div className='h-20 p-5 bg- muted flex justify-end'>
            <OrderSheets/>
        </div>
    );
}
    
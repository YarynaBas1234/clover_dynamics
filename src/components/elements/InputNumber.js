import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputNumber({ handleValue }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
      handleValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <TextField
                type="number"
                value={value}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Box>
    );
}
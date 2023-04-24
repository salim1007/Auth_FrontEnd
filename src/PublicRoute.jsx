import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './layouts/frontend/DashboardUser';


function PublicRoute()
{
return (
    <Routes>
        <Route  path='/dashboard' element={<Dashboard/>} />
    </Routes>

)
}

export default PublicRoute;
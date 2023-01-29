import { Button } from "antd"
import { useLocation, useParams } from "react-router-dom"

export function User() {
    const location = useLocation();
    const params = useParams();
    console.log('params', params);
    console.log('location', location);
    
    return <>
        <div>Мы на странице юзера</div>
        <Button type="primary" >Кнопка</Button>
    </>
}


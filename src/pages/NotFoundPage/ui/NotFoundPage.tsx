import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => { 

    const navigate = useNavigate();
    
    const handleBack = function () {
        navigate('/users', { replace: true });
    }
    
    return (
        <Result
            status="404"
            title="404"
            subTitle="Извинете, такой страницы не существует."
            extra={<Button onClick={handleBack} type="primary">Страница пользователей</Button>}
        />
    )
}
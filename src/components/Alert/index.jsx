import { Alert, Space } from "antd";

const AlertMessage = ({ direction, message, style, type }) => {
    return (
        <Space
            direction={direction}
            style={style}
        >
            <Alert
                message={message}
                type={type}
                showIcon
                closable />
        </Space>
    )
}

export default AlertMessage;
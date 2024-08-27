export default function Tabs( {children, buttons, buttonContainer} ) {
    const ButtonContainer = buttonContainer || 'menu';
    return (
        <>
            <ButtonContainer> {buttons} </ButtonContainer>
            {children}
        </>
    );
}
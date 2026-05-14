import './App.css'

const canvas = <canvas id="canvas" width={window.innerWidth - 200} height={(window.innerHeight / 2)}></canvas>
export default function App() {
    return (
        <>
        <h1>Play Tic Tac Toe!</h1>
        <hr/>
        <p>Click the button below to start playing!</p>
        {canvas}
        </>
    )
}
import Contact from './assets/Contact'
import Hello from './assets/Hello'

function App(){
    const helloData = [
        {name : 'Anirach', message : 'Hi there'},
        {name : 'Tom', message : 'Hello..'}
    ]

    return (
        <div>
            {helloData.map((data,index)=>(
                <Hello key={index} name={data.name} message={data.message}/>
            ))}

            <Contact email = "s6606021611083@email.kmutnb.ac.th" phone ="0621936103"/>
        </div>
    )
}

export default App;
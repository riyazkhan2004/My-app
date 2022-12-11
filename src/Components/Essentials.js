import contents from'../JSON/contents.json'

function PassageBox1(){
    return(
        <div className='PassageRec'>
            <div style={{fontFamily:'verdana',position:'relative',padding:10,fontSize:20}}>
                {contents.about}
            </div>
            <div style={{fontFamily:'verdana',position:'relative',padding:10}}>
                {contents.content}
            </div>
        </div>
    );

}

export default PassageBox1;
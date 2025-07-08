import React from 'react'

function Reslinks({github,linkdin}) {
    return (
        <section>
             {linkdin ? <a className="link" href = {linkdin} target="_blank" rel="noreferrer">linkdin</a> : <p>{" "}</p>}
       {github ? <a className="link" href = {github} target="_blank" rel="noreferrer">github</a> : <p>{" "}</p>}
        </section>
    )
};

export default Reslinks
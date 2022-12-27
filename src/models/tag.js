import React from "react";

class Tag extends React.Component {
    constructor(props) {
        super(props)
        this.id = props.doc.id
        const data = props.doc.data()
        this.linkId = data.linkId
        this.name = data.name
        this.userId = data.userId
    }

    render() {
        console.log(this.id)
        console.log(this.name)
        return (
            <div className="link" key={this.id}>
                {this.id} - {this.name}
            </div>
        )
    }
}

export default Tag
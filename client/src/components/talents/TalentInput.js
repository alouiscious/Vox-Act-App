import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTalent } from "../../actions/talentActions"



// these form inputs must match rails input

class TalentInput extends Component {
  state = {
    talent_style: "",
    title: "",
    description: "",
    upid: "",
    phmf: "",
    vimf: "",
    aumf: "",
  };

  handleTalentInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleTalentOnSubmit = (event) => {
    event.preventDefault();
    const talent = {
      title: this.state.title,
      talent_style: this.state.talent_style,
      description: this.state.description,
      phmf: this.state.phmf,
      vimf: this.state.vimf,
      aumf: this.state.aumf,
    };
    console.table("Talentinput state", this.state);

    this.props.addNewTalent(talent)
    .then((talentJSON) => {
      this.props.history.push(`/Talents/${talentJSON}`);
      this.props.history.push(`/UserPage/${talentJSON.user_id}`)

      console.table("talentJSON", talentJSON);
    });
    // console.table("talent after actions", talent);

    this.setState({
      talent_style: "",
      title: "",
      description: "",
      aumf: "",
      phmf: "",
      vimf: "",
    });
  };

  render() {
    // debugger
    return (
      <div className="TalentInput">
        Complete this form and add your Talent!
        <form onSubmit={this.handleTalentOnSubmit}>
          <div className="talentDetails">
            <label htmlFor="title">Define your talents: </label>

            <input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.handleTalentInputChange}
              placeholder="Talent Title"
            />
            <label htmlFor="talent_style"> as </label>

            <select
              value={this.state.talent_style}
              name="talent_style"
              onChange={this.handleTalentInputChange}
            >
              <option>
              Choose talent style
              </option>
              <option>
                Actor
              </option>
              <option>
                Voice
              </option>
              <option>
                Model
              </option>
            </select>
            <br />

            <label htmlFor="description"> Description </label>
            <textarea
              type="textarea"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleTalentInputChange}
              cols={40}
              rows={14}
              wrap={1}
              // required={1}
              placeholder="Provide Description"
            />

            <br />
            <label htmlFor="phmf"> Add Photo </label>
            <input
              type="file"
              id="phmf"
              name="phmf"
              value={this.state.phmf}
              onChange={this.handleTalentInputChange}
              placeholder="Talent Photo Link"
            />
            <br />
            <label htmlFor="vimf"> Add Video </label>
            <input
              type="file"
              name="vimf"
              id="vimf"
              value={this.state.vimf}
              onChange={this.handleTalentInputChange}
              placeholder="Talent Video Link"
            />
            <br />
            <label htmlFor="aumf"> Add Audio </label>
            <input
              type="file"
              name="aumf"
              id="aumf"
              value={this.state.aumf}
              onChange={this.handleTalentInputChange}
              placeholder="Talent Audio Link"
            />
            <br />
            <br />
          </div>

          <input type="submit" value="Create Talent" />
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {talents: state.talents}
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     addNewTalent: () => {
//       dispatch(addNewTalent())
//     }
//   }
// }


export default connect(state => ({talents: state.talents}), {addNewTalent: addNewTalent})(TalentInput)
// export default connect(mapStateToProps, { something: addNewTalent })(TalentInput)
// export default connect(null, { addNewTalent })(TalentInput)
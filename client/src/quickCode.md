import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = { text: action.text, id: cuidFn() };
      return {
        ...state,
        restaurants: [ ...state.restaurants, restaurant]
      }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants}

    case 'ADD_REVIEW':

      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
      return { ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }

    default:
      return state;

  }
};




  uploadAction() {
    var data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    data.append("data", imagedata);

    fetch("http://localhost:8910/taskCreationController/createStoryTask", {
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
        "Accept": "application/json",
        "type": "formData"
      },
      body: data
    }).then(function (res) {
      if (res.ok) {
        alert("Perfect! ");
      } else if (res.status == 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Error submitting form!");
    });
  }

  render() {
    return (
        <form encType="multipart/form-data" action="">
          <input type="file" name="fileName" defaultValue="fileName"></input>
          <input type="button" value="upload" onClick={this.uploadAction.bind(this)}></input>
        </form>
    )
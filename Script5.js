var data = [{"id":1,"term_id":5,"type":"car"},{"id":2,"term_id":3,"type":"bike"},{"id":3,"term_id":6,"type":"car"}];

const filteredArray = () => {
    var result = data.filter((e) => {
        return ![5, 6].includes(e.term_id) }
      );
      
      console.log(result);
}


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Authors = () => {

    let[allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res)
                setAllAuthors(res.data.authors)})
            .catch(err => {console.log("Something went wrong", err)})
    }, [])

    const deleteAuthor = (authorId, idx) => {
        
        axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
            .then(res => {
                console.log(res)
                
            })
            .catch(err => {console.log(err)})

        }

    return(
        <>
            <div className='container-sm'>
                <h3><Link to="/new">Add an author</Link></h3>
                <h4>We have quotes by: </h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Author</th>
                            <th scope='col'>Actions Available</th>
                        </tr>
                        </thead>
                        <tbody>
                              {
                                  allAuthors.map((authObj, idx) => {
                                      return(
                                          <tr>
                                              <td>{authObj.name}</td>
                                              <td><button className='btn btn-dark'><Link to={`/edit/${authObj._id}`}>Edit</Link></button> <button className='btn btn-dark' onClick={(e) => deleteAuthor(authObj._id, idx)}>Delete</button></td>
                                          </tr>
                                      )
                                  })
                              }          
                        </tbody>
                </table>
            </div>
                
    

        </>
    )
    
}

export default Authors;
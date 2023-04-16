import React from 'react';
import { Auth, graphqlOperation } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { DataStore } from '@aws-amplify/datastore';
import { TestModel } from '../models';
import * as mutations from '../graphql/mutations';
export default function LandingPage(props) {

    //how to access authenticated user
    async function checkUser() {
        
        const user = await Auth.currentAuthenticatedUser()
        
        console.log('user: ', user)
        checkModels();
    }

    //how to use fortnite API 
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "2c338f0a-4054-44d1-a241-a1f82f6f5376");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    // useEffect( ()=>{
    //     fetch("https://fortnite-api.com/v2/stats/br/v2?name=Prospеring", requestOptions)
    //     .then(response => response.json())
    //     .then(result => console.log(result.data.stats.all))
    //     .catch(error => console.log('error', error));
    // })
    //how to check if person in database
    async function checkModels(){
    // const allTodos = await API.graphql({ query: queries.listPlayerModels });
    // console.log(allTodos);
    // const detail = {
    //     id:'testing12345670',
    //     name:'james smith' 
    // };
    // const item = await API.graphql({
    //     query: mutations.createTestModel,
    //     variables: {input: detail}
    // })
    //How to fetch a single ID 
    // const item = await API.graphql({
    //     query: queries.getTestModel,
    //     variables: { id: '123456' }
    //   });
    // console.log(item.data.getTestModel);
    //How to update the name of a known ID
    const todoDetails = {
        id: '123456',
        name: 'newName'
      };
      const updatedTodo = await API.graphql({ 
        _version: 'current_version',
        query: mutations.updateTestModel, 
        variables: { input: todoDetails }
      });
      console.log(updatedTodo);
      
      console.log("updated name");
    }
    return (
        <div className='landing-bg'>
            <div>
                <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Sign in w google</button>
                <button onClick={checkModels}>Check user</button>
            </div>
            <div className='container'>
                <div className='d-flex'>
                    <img src='pics/boys.png' className='landing-boys-pic img-fluid'></img>
                    <div className='welcome-text justify-content-end'>Welcome <br></br> to MyXP</div>

                </div>
                <div className='text-end pe-5 pt-4 fs-4 text-light'>A centralized esports hub which allows gamers to showcase <br></br> their experience and make professional connections.</div>
                <div className='d-flex text-center row'>
                    <div className='mt-4 col'>
                        <img src='pics/favicon.png' className='landing-logo'></img>
                        <p className='landing-text'>Who is MyXP for?</p>
                    </div>
                    <div className='col mt-auto'>
                        <p className='landing-text fw-normal'>Gamers</p>
                    </div>
                    <div className='col mt-auto'>
                        <p className='landing-text fw-normal'>Recruiters</p>
                    </div>
                </div>
                <div className='d-flex text-center row mt-5'>
                    <div className='col mt-auto'>
                        <p className='landing-text'>Promote your professional gaming career.</p>
                    </div>
                    <div className='col mt-auto'>
                        <p className='landing-text fw-normal fs-6'>Through myXP, gamers are able to create their own customized profile which spotlights their gaming experience, allowing players from everywhere to share their talents and connect to a larger group of organizations, scouts, or teams. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

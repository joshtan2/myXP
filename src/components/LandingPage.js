import React from 'react';
import { Amplify, Auth, graphqlOperation } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { DataStore } from '@aws-amplify/datastore';
import { TestModel, UserInfo } from '../models';
import * as mutations from '../graphql/mutations';
import { Collapse } from 'react-bootstrap';
import { Storage } from 'aws-amplify';
export default function LandingPage(props) {

    //how to access authenticated user
    async function checkUser() {
        const isLoggedIn = await Auth.currentUserInfo();
        if (isLoggedIn){
        const user = await Auth.currentAuthenticatedUser()
        console.log('user: ', user);
        // checkModels(user);
        getPic(null)
        // makeTest();
        //uploadPic
        }

    }
    async function uploadPic(){
        const profilePicObj = null 
        Storage.configure({region: 'us-east-2'})
        const {key} = await Storage.put('user_id',profilePicObj, {contentType:'image/png'})
    }
    async function getPic(user){
        try {
            // const picURI = await Storage.get(user.data.getPlayerModel.profile_img , {expires:60})
            const uri = await Storage.get('profile_pic.jpeg')
            console.log(uri);
        } catch (error) {
            console.log(error)
        }
    }
    async function logout(){
        const logout = await Auth.signOut();
        console.log(logout);
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
    async function checkModels(value){
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
    console.log(value.username)
    const item = await API.graphql({
        query: queries.getPlayerModel,
        variables: { id:value.username }
      });
    // console.log(item.data.getTestModel);
      if (item.data.getPlayerModel == null){
        //we know the user does not exists and we need to make one 
        console.log("making player model")
        const user_info ={'name':value.attributes.name, 'email':value.attributes.email }
        const game =  {}
        const experiences = {experience:[]}
        const playerData = {
            id: value.username,
            games: JSON.stringify(game),
            experiences: JSON.stringify(experiences),
            user_info: JSON.stringify(user_info),
            profile_img:""
        };
        const player = await API.graphql({
            query: mutations.createPlayerModel,
            variables: {input:playerData}
            // ,authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        console.log(player);
      }else{
        // they already have an account
        //How to update the name of a known ID
        const game= {fortnite: 'Prospering'}
        const experiences= [{name:'title1'},{name:'title2'}]
        const user_info= {name:'james smith', email:'testemail@gmail.com'}
        console.log(item)
        const playerModel = {
            id: item.data.getPlayerModel.id,
            games: JSON.stringify(game),
            experiences: JSON.stringify(experiences),
            user_info: JSON.stringify(user_info),
            profile_img: ""
        };
        const updatedTodo = await API.graphql({ 
            _version: 'current_version',
            query: mutations.updatePlayerModel, 
            variables: { input: playerModel }
        });
        console.log(updatedTodo);
      }
      console.log("create player");
    }
    async function makeTest(){
        const details = {id:'12345679',
    name:'hello world'};
    const item = await API.graphql({
        query: mutations.createTestModel,
        variables: {input: details}
    })
    console.log("made test")
    }
    return (
        <div className='landing-bg'>
            <div>
                <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Sign in w google</button>
                <button onClick={logout }>Sign out</button>

                <button onClick={checkUser}>Check user</button>

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

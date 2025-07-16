// import { useForm } from "react-hook-form";

// function Services(){
//     const {register,handleSubmit,formState: { errors },} = useForm();

//     const handleSubmit1 = (data)=>{
//         console.log(data);
//     }
//     return(<>
//     <p>services</p>
//     <form  onSubmit={handleSubmit(handleSubmit1)}>
//         <input 
//         {...register('fname',{required:true})}
//         /><br/><br/>
//          <input
//          {...register('lname',{required:"please fill this"})} />
//          { errors.lname && <span style={{color:'red'}}>{errors.lname.message}</span>}
//          <br/><br/>
//           <input
//           {...register('email',{pattern:{
//             value:/^\S+@\S+\.S+$/,
//             message:'Should be in correct form'
// }})}/>
//           { errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
//           <br/><br/>
//            <input
//            {...register('password',{pattern:{
//             value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
//             message:'should be in correct form'
//            }})}
//            />
//            { errors.password && <span style={{color:'red'}}>{{ }}<span/>}
//            <br/><br/>
//             <input
//           {...register('age', {min:{
//             value:18,
//             message:'min age should be 18'
//           },max:{
//             value:65,
//             message:'max age should be 65'
//           }})}
//           />
//           { errors.age && <span style={{color:'red'}}>{errors.age.message}</span>}
//           <br/><br/>
//             <input type="checkbox "
//             {...register('subscribe')}
//             /><br/><br/>
//             <button>Submit</button>
//     <form/>
//     </>);

//     }

// export default Services;
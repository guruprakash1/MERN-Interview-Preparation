//Everything in JS happens inside execution context
//it's like big box and it has two componnents 1 is Memory component and another is code component
//This execution content created in 2 phases. 1st phase is known as the creation phase or memory creation phase.
// In the memory phase js will create all the varibales and functions


// let us assume the below program:
// Phase-1:Memory alloacation phase
//When JS sees var n in line 1, it will allocate memory n like n: 
//and it will store a special value known as undefined like n : undefined

//In line 2, it sees a functions, so it will allocate memory to square. like square:
//and in case of function it will store whole code of the function like {}

//It will also allocate memory for square2 and square4; 

//And it will store undeifned and undefined for square2 and square4.

// Phase-2: Code execution phase

//In this phase the whole js code will execute again line by line.
//The code will execute here.
//In this phase 2 will be assigned to n
//then it checks the next line and as it function and here nothing to do so it will go to next line means after function end line

//In the line 33, we will invoke the function. Menas function call and here a brand new execution context will execute.
    //And again there will 2 phases will create one is memeory and other is code.
        /// Phase-1:Memory alloacation phase
            // num and ans will be store as undefined
        /// Phase-2:Code execution phase.
            //n will pass to num. so that means 2 will pass to num.
            //Here num is argument and n is parameter.,
            //Here it will calculate num *num and will store it to ans.
            //Then it goes to the next line and it sees a special charatcer return. then it says youy are done with your work.
            //return says return the value whjere the function is invoked or called.
            //Once we return the value the whole execution copntent will be deleted.
            //Similaary again it will happen for the next function call example-var sqaure4 = sqaure(4);

//**Once the whole code is done then the global execution content will be deleted */

//To manage all these creation and deletion JS has it's own callstack.
//Callstack is a stack which is having global exection context is in it's bottom.
//When JS is running everuything going inside the callstack. The while excetuiotn context pushed inside the stack. Once the code is done then it will pop's out from the stack.
//After the whole code executed the callstck will empty.
//Callstcak maintains the execution of the context


var n = 2;
function sqaure(num) {
    var ans = num * num;
    return ans;
}
var sqaure2 = sqaure(n);
var sqaure4 = sqaure(4);
console.log(sqaure2);
console.log(sqaure4);
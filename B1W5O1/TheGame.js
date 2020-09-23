var keuze = prompt(" Welcome this is the Piggy Charactor Finder.\n Question 1\n Does the charactor has a dress?\n Yes\n No");
if (keuze == "No"){
    console.log("The charactor has no dress.");
        var keuze = prompt(" Question 2\n Is your charactors head green?\n Yes\n No");
        if(keuze == "Yes"){
            console.log("Your charactors head is not green.");
            console.log("Its Zompiggy!")
            document.write("Its Zompiggy!");
        }else if(keuze == "No"){
            console.log("The charactor has no green head")
            var keuze = prompt("Question 3\n Do you see the bones of your charactor?\n Yes\n No");
            if(keuze == "Yes"){
                console.log("Its Skelly!");
                document.write("Its Skelly!");
            }else if(keuze == "No"){
                console.log("Its Parasee!")
                document.write("Its Parasee!");
            }else{
                console.log("Not a right input.");
                document.write("Not a right input.");
            }
        }else {
            console.log("Not a right input.");
            document.write("Not a right input.");
        }
}
else if (keuze == "Yes"){
    console.log("The charactor has a dress")
   var keuze = prompt(" Question 2\n Is your charactor a pig?\n Yes\n No");
    if (keuze == "Yes"){
        console.log("The charactor is a pig.")
        var keuze = prompt(" Question 3\n Is your charactors head pink?\n Yes\n No");
       if (keuze == "Yes"){
           console.log("The charactor has a pink head.");
           var keuze = prompt(" Question 4\n Is your charactors dress red?\n Yes\n No");
           if (keuze == "Yes"){
               console.log("The dress is red.")
               console.log("Its Piggy!");
               document.write("Its Piggy!");
           }
           else if(keuze = "No"){
               var keuze = prompt(" Question 5\n Is your charactors dress purple?\n Yes\n No");
               if (keuze == "Yes"){
                   console.log("The charactors dress is purple.");
                   console.log("Its Grandmother!");
                   document.write("Its Grandmother!");
               }
               else if (keuze =="No"){
                   var keuze = prompt(" Question 6\n Is your charactors dress blue?\n Yes\n No");
                   if (keuze == "Yes"){
                       console.log("The charactors dress is blue.");
                       var keuze = prompt(" Question 7\n Does your charactor has glasses?\n Yes \n No");
                       if (keuze == "Yes"){
                           console.log("The charactor has glasses.");
                           console.log("Its Father!");
                           document.write("Its Father!");
                         }else if (keuze == "No"){
                           console.log("The charactor has no glasses.");
                           console.log("Its Little Brother!");
                           document.write("Its Little Brother!");
                       }else {
                           console.log("Not a right input.");
                           document.write("Not a right input.");
                       }
                    }
                   else if(keuze == "No"){
                     console.log("The charactors dress is not blue.");
                     console.log("Its Mother!");
                     document.write("Its Mother!")
                    }
               }else {
                console.log("Not a right input.");
                document.write("Not a right input.");
            }
           }
       }
       else if (keuze == "No"){
           console.log("The charactors head is pink.")
        var keuze = prompt("Question 4\n Is the charactors dress yellow?\n Yes\n No");
        if (keuze == "Yes"){
            console.log("The charactor dress is yellow.");
            console.log("Its Angel!");
            document.write("Its Angel!");
        }
        else if(keuze == "No"){
            console.log("The charactors dress is not yellow.")
            var keuze = prompt("Question 5\n Is your charactors head white?\n Yes\n No")
            if (keuze == "Yes"){
                console.log("The charactors head is white.");
                console.log("Its Memory!");
                document.write("Its Memory!");
            }else if (keuze =="No"){
                console.log("The charactors head is not white.");
                console.log("Its Devil!");
                document.write("Its Devil!");
            }
           }else {
                console.log("Not a right input.");
                document.write("Not a right input.");
            }
        }else {
            console.log("Not a right input.");
            document.write("Not a right input.");
        }
    }else if(keuze == "No"){
        console.log("The charator is no pig.")
        var keuze = prompt("Question 3\n Can you see your charactor as animal in the Zoo?\n Yes \n No");
        if (keuze == "Yes"){
            console.log("The charactor is a animal in the zoo.")
            var keuze = prompt("Question 4\n Is your charactors dress purple?\n Yes \n No");
            if (keuze == "Yes"){
                console.log("The charators dress is purple.")
                var keuze = prompt("Question 5\n Is the weapon of your charactor a sword?\n Yes \n No");
                if (keuze == "Yes"){
                    console.log("The charactors weapon is a sword")
                    console.log("Its Zizzy!")
                    document.write("Its Zizzy!");
                }else if (keuze == "No"){
                    console.log("The charactors weapon is not a sword.");
                    console.log("Its Teacher!");
                    document.write("Its Teacher!");
                }else{
                    console.log("Not a right input.")
                    document.write("Not a right input.");
                }
            }else if (keuze == "No"){
                console.log("The charactors dress is not purple.")
                var keuze = prompt("Is the charactors weapon a bamboo stick?\n Yes\n No");
                if (keuze == "Yes"){
                    console.log("The charactors weapon is a bamboo stick.");
                    console.log("Its Pandy!");
                    document.write("Its Pandy!");
                }else if(keuze == "No"){
                    console.log("The charactors weapon is not a bamboo stick.");
                    console.log("Its Elly!");
                    document.write("Its Elly!");
                }else {
                    console.log("Not a right input.");
                    document.write("Not a right input.");
                }
            }else{
                console.log("Not a right input.")
                document.write("Not a right input.");
            }
        }
        else if (keuze == "No"){
            console.log("The charator is no animal in the zoo.")
            var keuze = prompt("Question 4\n Is your charactors dress pink?\n Yes \n No");
            if (keuze == "Yes"){
                console.log("The charactors dress is pink.")
                var keuze = prompt("Question 5\n Is your charactors weapon a plank?\n Yes\n No");
                if(keuze == "Yes"){
                    console.log("The charactors weapon is a plank.");
                    console.log("Its Daisy!")
                    document.write("Its Daisy!");
                }else if (keuze == "No"){
                    console.log("The charactors weapon is not a plank.");
                    console.log("Its Mousy!");
                    document.write("Its Mousy!");
                }else {
                    console.log("Not a right input")
                    document.write("Not a right input.");
                }
            }
            else if (keuze == "No"){
                console.log("The charactors dress is not pink.")
                var keuze = prompt("Question 5\n Does your charactors has glasses?\n Yes\n No");
                if (keuze == "Yes"){
                    document.write("Its Mimi!");
                }else if (keuze == "No"){
                    var keuze = prompt("Question 6\n Is your charactors weapon a crossbow?\n Yes \n No");
                    if (keuze == "Yes"){
                        console.log("The charactors weapon is a crossbow.");
                        console.log("Its Bunny!");
                        document.write("Its Bunny!");
                    }else if (keuze == "No"){
                        console.log("The charactors weapon is not a crossbow.")
                        var keuze = prompt("Question 7\n Is your charactors dress blue?\n Yes\n No");
                        if (keuze == "Yes"){
                            console.log("The charactors dress is blue.");
                            console.log("Its Kitty!");
                            document.write("Its Kitty!");
                        }else if (keuze == "No"){
                            console.log("The charactors dress is not blue.");
                            console.log("Its Lisa!");
                            document.write("Its Lisa!<br> Only Ik3as has it!");
                        }
                    }else {
                        console.log("Not a right input.");
                        document.write("Not a right input.");
                    }
                }else {
                    console.log("Not a right input.");
                    document.write("Not a right input.");
                }
            }else {
                console.log("Not a right input.");
                document.write("Not a right input.");
            }
        }else {
            console.log("Not a right input.");
            document.write("Not a right input.");
        }
    }else {
        console.log("Not a right input.");
        document.write("Not a right input.");
    }
}else {
    console.log("Not a right input.");
    document.write("Not a right input.");
}
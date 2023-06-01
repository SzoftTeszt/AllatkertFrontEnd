*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${nev}    Robika
${faj}    Papagáj
${gondozo}    Bő Ödön
${helye}    Madár-ház
*** Test Cases ***
Open Site
    Open Browser    http://localhost:4200     Chrome    options=add_experimental_option("detach", True)
    Page Should Contain    home works!
    Maximize Browser Window
    Capture Page Screenshot    home.png
Click Animals
    Click Element    xpath://*[@id="navbarSupportedContent"]/ul/li[2]/a
    Sleep     1s
    Page Should Contain    gondozo
    Capture Page Screenshot    animals.png
Click Employee
    Click Element    xpath://*[@id="navbarSupportedContent"]/ul/li[3]/a
    Sleep     1s
    Page Should Contain    employee works!
    Capture Page Screenshot    employee.png
Create New Animal
    Click Element    xpath://*[@id="navbarSupportedContent"]/ul/li[2]/a
    Sleep     1s
    Input Text    id:createnev    ${nev}
    Input Text    id:createfaj    ${faj}
    Input Text    id:creategondozo    ${gondozo}
    Input Text    id:createhelye    ${helye}
    Click Element    id:createbutton
Animal Exist
    Wait Until Element Is Visible    id:${nev}nev    2s
    # Click Element    id:${nev}delete
    Input Text    id:${nev}nev    Zsoltika
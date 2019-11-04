//CASHED ITEMS
let $inputEl = $('input');
let $containerEl = $('.container');
let $addSkill = $('#addSkill');


function addSkill() {
    if ($inputEl.val() === '') {
        return;
    }

    let $skillItem = $(`
        
        <div id='skill-Item'>
        <button id='remove-Skill' class="btn btn-danger">
        X
        </button>
        ${$inputEl.val()}
        </div>
    `);
    console.log($inputEl.val())
    $containerEl.append($skillItem);
    $inputEl.val('');
}

function removeSkill() {
    $(this).closest('#skill-Item').remove();
}

$addSkill.on('click', addSkill);
$containerEl.on('click', 'button', removeSkill);





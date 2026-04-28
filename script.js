let votes = JSON.parse(localStorage.getItem("votes")) || {
    A: 0,
    B: 0,
    C: 0
};

let voted = localStorage.getItem("voted");

updateResults();

document.getElementById("voteForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let selected = document.querySelector('input[name="candidate"]:checked');

    if (!selected) {
        document.getElementById("message").innerText = "Please select a candidate!";
        return;
    }

    if (localStorage.getItem("voted") === "true") {
        document.getElementById("message").innerText = "You have already voted!";
        return;
    }

    votes[selected.value]++;

    localStorage.setItem("votes", JSON.stringify(votes));
    localStorage.setItem("voted", "true");

    document.getElementById("message").innerText = "Vote recorded successfully!";
    updateResults();
});

function updateResults() {
    let total = votes.A + votes.B + votes.C;

    document.getElementById("countA").innerText = votes.A + 
        (total ? " (" + ((votes.A / total) * 100).toFixed(1) + "%)" : "");

    document.getElementById("countB").innerText = votes.B + 
        (total ? " (" + ((votes.B / total) * 100).toFixed(1) + "%)" : "");

    document.getElementById("countC").innerText = votes.C + 
        (total ? " (" + ((votes.C / total) * 100).toFixed(1) + "%)" : "");
}
function resetVotes() 
{
    localStorage.clear();
    location.reload();
}
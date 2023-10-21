export default function FlipCard({ question, answer }) {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h1>{question}</h1>
                </div>
                <div class="flip-card-back">
                    <h1>{answer}</h1>
                </div>
            </div>
        </div>
    );
}

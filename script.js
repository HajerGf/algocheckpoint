def analyze_sentence(sentence):
    vowels = "aeiouAEIOU"
    length = len(sentence)
    words = len(sentence.split())
    num_vowels = 0
    for char in sentence:
        if char in vowels:
            num_vowels += 1
    print("Length of sentence: ", length)
    print("Number of words in sentence: ", words)
    print("Number of vowels in sentence: ", num_vowels)

sentence = "This is a sample sentence."
analyze_sentence(sentence)
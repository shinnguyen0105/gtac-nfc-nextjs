import pandas as pd
import json
import unidecode

# Read excel file
df = pd.read_excel('Member List.xlsx')

# Read json file
with open('members.json', encoding='utf-8') as f:
    data_ex = json.load(f)

# Convert to json
df_json = df.to_json(orient='records', force_ascii=False)
df_json = json.loads(df_json)

# Write a function that compare difference between two json files
# Each row in excel file is a student information, find the student by name in data_ex
# If the student is existed, update the information
# If the student is not existed, add the student to data_ex (follow the format in data_ex)

template_student = list(data_ex['members'][0].keys())

def compare_json(data_ex, df_json):
    for i, student in enumerate(df_json):
        trigger = False
        for index, s in enumerate(data_ex):
            if student['name'] == s['name']:
                for key in template_student:
                    if "id" in key:
                        # lower name
                        name = unidecode.unidecode(student['name'].lower())
                        name = name.split(' ')
                        ids = name[-1]+"".join([n[0] for n in name[:-1]])
                        data_ex[index][key] = ids
                    if key in student:
                        if "image" in key:
                            data_ex[index][key] = "images/"
                        elif "phone" in key:
                            #  format phone number to 4 digits 3 digits 3 digits
                            phone = str(student['phone'])
                            if len(phone) >= 10:
                                data_ex[index][key] = phone[:4]+" "+phone[4:7]+" "+phone[7:]
                            else:
                                data_ex[index][key] = phone                        
                        elif "email" in key:
                            data_ex[index][key] = str(student[key]).lower()
                        else:
                            data_ex[index][key] = str(student[key])
                trigger = True
                break
        if not trigger:
            st = {}
            for key in template_student:
                if "id" in key:
                    # lower name
                    name = unidecode.unidecode(student['name'].lower())
                    name = name.split(' ')
                    ids = name[-1]+"".join([n[0] for n in name[:-1]])
                    st[key] = ids
                elif key in student:
                    if "image" in key:
                        st[key] = "images/"
                    elif "phone" in key:
                        #  format phone number to 4 digits 3 digits 3 digits
                        phone = str(student['phone'])
                        if len(phone) >= 10:
                            st[key] = phone[:4]+" "+phone[4:7]+" "+phone[7:]
                        else:
                            st[key] = phone                    
                    elif "email" in key:
                        st[key] = str(student[key]).lower()
                    else:
                        st[key] = str(student[key])
                else:
                    st[key] = ""
            print(st)
            data_ex.append(st)
    return data_ex

# Write the result to json file
with open('new_members.json', 'w', encoding='utf-8') as f:
    data_save = {'members': []}
    data_save['members'] = compare_json(data_ex["members"], df_json)
    json.dump(data_save, f, ensure_ascii=False)
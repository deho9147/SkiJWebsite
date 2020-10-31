import React, {Component} from 'react';
import './EcExamination.css';
export default class CsvDisplay extends Component{
    genHtml(){
        var papa = require('papaparse');
        var parsedCsv = papa.parse(this.props.csvData).data;
        //var table = '<table border = 1 align="center">'
        var table = "<tr><th>Year</th><th>State</th><th>Candidate</th><th>Party</th><th>Electoral Votes</th><th>State Vote Percentage</th><th>Candidate</th><th>Party</th><th>Electoral Votes</th><th>State Vote Percentage</th></tr>"

        for(var i = 0; i<parsedCsv.length; i++){
            table = table+"<tr>"
            for(var j = 0; j<parsedCsv[i].length;j++){
                table = table + "<td>"+parsedCsv[i][j]+"</td>"
            }
            table=table+"</tr>"

        }
        //table = table + "</table>"
        return {__html: table}
    }
    render(){
        return( <div> 
            <table className="CSVdisplay" dangerouslySetInnerHTML={this.genHtml()}></table>
            </div>
        )
    }
}